# 🚀 How to Fix "Failed to send message" on Vercel

The error happens because Vercel doesn't know your `RESEND_API_KEY`. You need to add it manually.

## Step 1: Get Your API Key
1. Open your `.env.local` file in your project.
2. Copy the value of `RESEND_API_KEY`.
   - It should look like: `re_eSrRfwjc_...`

## Step 2: Add to Vercel
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Select your project (**portfolio-joseph**).
3. Click on the **Settings** tab (top menu).
4. Click on **Environment Variables** (left sidebar).
5. Add the variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: `re_eSrRfwjc_2H1hzecFtuRnTquAZNp6U6P4` (Paste your actual key here)
6. Click **Save**.

## Step 3: Redeploy (Important!)
Adding the variable doesn't update the running site automatically. You must redeploy.

1. Go to the **Deployments** tab in Vercel.
2. Click the **three dots** (...) next to your latest deployment.
3. Select **Redeploy**.
4. Click **Redeploy** again to confirm.

## Step 4: Test
Once the redeployment finishes (usually ~1 minute):
1. Go to your live site (`https://josephngandu.com/contact` or your Vercel URL).
2. Try sending a message again.
3. It should work now! 🎉
