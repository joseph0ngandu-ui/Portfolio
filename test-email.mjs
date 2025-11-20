// Test script to verify Resend email sending
// Run with: node --env-file=.env.local test-email.mjs

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTestEmail() {
    try {
        console.log('Sending test email...');

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'joseph.0.ngandu@icloud.com',
            subject: 'Portfolio Contact Form - Test Email',
            html: '<p>Congrats! Your contact form email integration is <strong>working perfectly</strong>! 🎉</p><p>You can now receive messages from your portfolio.</p>'
        });

        console.log('✅ Email sent successfully!');
        console.log('Email ID:', data.id);
        console.log('Check your inbox at joseph.0.ngandu@icloud.com');
    } catch (error) {
        console.error('❌ Error sending email:', error);
    }
}

sendTestEmail();
