import algoliasearch from "algoliasearch/lite";

const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string;
const algoliaSearchApiKey = process.env
  .NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string;

export const searchClient = algoliasearch(algoliaAppId, algoliaSearchApiKey);
