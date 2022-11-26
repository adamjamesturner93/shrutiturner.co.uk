# A statically generated blog example using Next.js and Contentful

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using [Contentful](https://www.contentful.com/) as the data source.

## Demo

### [https://next-blog-contentful.vercel.app/](https://next-blog-contentful.vercel.app/)

## Deploy your own

Using the Deploy Button below, you'll deploy the Next.js project as well as connect it to your Contentful space using the Vercel Contentful Integration.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fcms-contentful&project-name=nextjs-contentful-blog&repository-name=nextjs-contentful-blog&demo-title=Next.js+Blog&demo-description=Static+blog+with+multiple+authors+using+Preview+Mode&demo-url=https%3A%2F%2Fnext-blog-contentful.vercel.app%2F&demo-image=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1625705016%2Ffront%2Fexamples%2FCleanShot_2021-07-07_at_19.43.15_2x.png&integration-ids=oac_aZtAZpDfT1lX3zrnWy7KT9VA&env=CONTENTFUL_PREVIEW_SECRET&envDescription=Any%20URL%20friendly%20value%20to%20secure%20Preview%20Mode)

## Configuration

### Step 5. Set up environment variables

From your contentful space, go to **Settings > API keys**. There will be an example Content delivery / preview token - you can use these API keys. (You may also create a new key.)

Next, copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `CONTENTFUL_SPACE_ID` should be the **Space ID** field of your API Key
- `CONTENTFUL_ACCESS_TOKEN` should be the **[Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) - access token** field of your API key
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN` should be the **[Content Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/) - access token** field of your API key
- `CONTENTFUL_PREVIEW_SECRET` should be any value you want. It must be URL friendly as the dashboard will send it as a query parameter to enable preview mode
- - `CONTENTFUL_REVALIDATE_SECRET` should be any value you want. This will be the value you pass in as a secret header from the Contentful Webhook settings to use **[On-Demand Revalidation](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration#on-demand-revalidation)**

Your `.env.local` file should look like this:

```bash
CONTENTFUL_SPACE_ID=...
CONTENTFUL_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_SECRET=...
CONTENTFUL_REVALIDATE_SECRET=...
```

### Step 6. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

### Step 7. Try preview mode

In your Contentful space, go to **Settings > Content preview** and add a new content preview for development.

The **Name** field may be anything, like `Development`. Then, under **Content preview URLs**, check **Post** and set its value to:

```
http://localhost:3000/api/preview?secret=<CONTENTFUL_PREVIEW_SECRET>&slug={entry.fields.slug}
```

Replace `<CONTENTFUL_PREVIEW_SECRET>` with its respective value in `.env.local`.

![Content preview setup](./docs/content-preview-setup.png)

Once saved, go to one of the posts you've created and:

- **Update the title**. For example, you can add `[Draft]` in front of the title.
- The state of the post will switch to **CHANGED** automatically. **Do not** publish it. By doing this, the post will be in draft state.
- In the sidebar, you will see the **Open preview** button. Click on it!

![Content entry overview](./docs/content-entry-preview.png)

You will now be able to see the updated title. To exit preview mode, you can click on **Click here to exit preview mode** at the top of the page.

### Step 9. Try using On-Demand Revalidation

In your Contentful space, go to **Settings > Webhooks** and add a new webhook:

- **Give the webhook a name**
- **Activate:** Check the activate checkbox to ensure the webhook is marked as active
- **Specify the POST URL:** Using the URL from your Vercel deployment in step 8, add the path `/api/revalidate` at the end, so it would look something like:

  ```
  https://<YOUR_VERCEL_DEPLOYMENT_URL>/api/revalidate
  ```

  Replace `<YOUR_VERCEL_DEPLOYMENT_URL>` with your own deployment URL as noted in the Vercel dashboard.

- **Specify Triggers:** You can choose to trigger for all events or specific events only, such as the Publishing and Unpublishing of Entries and Assets, as shown below.

  ![Content webhook url](./docs/content-webhook-url.png)

- **Specify Secret Header:** Add a secret header named `x-vercel-reval-key` and enter the value of the
  `CONTENTFUL_REVALIDATE_SECRET` from before.

  ![Content secret header](./docs/content-secret-header.png)

- **Set Content type:** Set content type to `application/json` in the dropdown.

  ![Content publish changes](./docs/content-content-type.png)

- **Edit post:** Now, try editing the title of one of your blog posts in Contentful and click Publish. You should see the changed reflected in the website you just deployed, all without triggering a build! Behind the scenes a call was made to the revalidate api that triggers a revalidation of both the landing page and the specific post that was changed.

  ![Content publish changes](./docs/content-publish-changes.png)

- **Verify:** You can verify if your request was made successfully by checking the webhook request log on Contentful and checking for a successful 200 status code, or by having your functions tab open on Vercel when committing the change (log drains may also be used). If you are experiencing issues with the api call, ensure you have correctly entered in the value for environment variable `CONTENTFUL_REVALIDATE_SECRET` within your Vercel deployment.

  ![Content successful request](./docs/content-successful-request.png)
