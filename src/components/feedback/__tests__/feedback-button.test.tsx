import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { FeedbackButton } from '../feedback-button';

const messages = {
  Feedback: {
    trigger: 'Feedback',
    triggerLabel: 'Open feedback widget',
    widgetLabel: 'Share your feedback',
    messageLabel: 'Your feedback (optional)',
    submit: 'Send',
    cancel: 'Cancel',
    close: 'Close',
    successMessage: 'Thank you for your feedback!',
  },
};

function setup() {
  const user = userEvent.setup();
  render(
    <NextIntlClientProvider locale="en" messages={messages}>
      <FeedbackButton />
    </NextIntlClientProvider>
  );
  return { user };
}

describe('FeedbackButton', () => {
  it('renders the trigger button', () => {
    setup();
    expect(
      screen.getByRole('button', { name: 'Open feedback widget' })
    ).toBeInTheDocument();
  });

  it('opens the feedback widget when the trigger is clicked', async () => {
    const { user } = setup();
    await user.click(screen.getByRole('button', { name: 'Open feedback widget' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('closes the widget when cancel is clicked', async () => {
    const { user } = setup();
    await user.click(screen.getByRole('button', { name: 'Open feedback widget' }));
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('submits feedback and shows a success message', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }));
    const { user } = setup();
    await user.click(screen.getByRole('button', { name: 'Open feedback widget' }));
    await user.type(screen.getByRole('textbox'), 'Great app!');
    await user.click(screen.getByRole('button', { name: 'Send' }));
    await waitFor(() => {
      expect(screen.getByText('Thank you for your feedback!')).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/forms/feedback',
      expect.objectContaining({ method: 'POST' })
    );
  });

  it('closes and resets the widget from the success state', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }));
    const { user } = setup();
    await user.click(screen.getByRole('button', { name: 'Open feedback widget' }));
    await user.click(screen.getByRole('button', { name: 'Send' }));
    await waitFor(() =>
      expect(screen.getByText('Thank you for your feedback!')).toBeInTheDocument()
    );
    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
