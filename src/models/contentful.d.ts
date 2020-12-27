// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

export interface IBlogPostFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Hero Image */
  heroImage?: Asset | undefined;

  /** Description */
  description: string;

  /** Body */
  body: string;

  /** Author */
  author?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** Publish Date */
  publishDate: string;

  /** Tags */
  tags?: ('general' | 'javascript' | 'static-sites')[] | undefined;
}

export interface IBlogPost extends Entry<IBlogPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'blogPost';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPageFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Hero Image */
  heroImage?: Asset | undefined;

  /** Body */
  body: string;

  /** Publish Date */
  publishDate: string;

  /** Tags */
  tags?: string[] | undefined;
}

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'page';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPersonFields {
  /** Name */
  name: string;

  /** Title */
  title: string;

  /** Company */
  company: string;

  /** Short Bio */
  shortBio: string;

  /** Email */
  email?: string | undefined;

  /** Phone */
  phone?: string | undefined;

  /** Facebook */
  facebook?: string | undefined;

  /** Twitter */
  twitter?: string | undefined;

  /** Github */
  github?: string | undefined;

  /** Image */
  image?: Asset | undefined;
}

export interface IPerson extends Entry<IPersonFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'person';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE = 'blogPost' | 'page' | 'person';

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
