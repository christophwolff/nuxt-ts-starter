
declare module '*/brradio.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const StationQuery: DocumentNode;
export const StationListQuery: DocumentNode;
export const StationDetailsQuery: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/fragments.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Station: DocumentNode;
export const Element: DocumentNode;
export const Stream: DocumentNode;
export const Broadcast: DocumentNode;
export const StationExtraMetaData: DocumentNode;

  export default defaultDocument;
}
    