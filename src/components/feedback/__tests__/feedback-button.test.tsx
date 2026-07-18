import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
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

const i18n = i18next.createInstance();
i18n.use(initReactI18next).init({
  lng: 'en',
  resources: { en: { translation: messages } },
  interpolation: { escapeValue: false },
});

function setup() {
  const user = userEvent.setup();
  render(
    <I18nextProvider i18n={i18n}>
      <FeedbackButton />
    </I18nextProvider>
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
    // VITE_API_BASE_URL is undefined in tests so BASE resolves to '' → '/api/forms/feedback'
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
