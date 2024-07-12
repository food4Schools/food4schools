declare const Knack: any;

declare module '*.css' {
  const styles: {
    readonly [key: string]: string;
  };

  export type ClassName = string;

  export default styles;
}

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue' {
  import { CompatVue } from '@vue/runtime-dom';
  const Vue: CompatVue;
  export default Vue;
  export * from '@vue/runtime-dom';
}

declare module 'vue/dist/vue.js';

declare const LazyLoad: any;

declare const ShortUniqueId: any;

declare module 'short-unique-id';

declare module 'knack-api/knack_api';

declare module 'jquery-csv';

declare const loadingSpinner: any;
