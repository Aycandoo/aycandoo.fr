import React from 'react';
import Layout from '../structure/layout';
import { HeadFC } from 'gatsby';
import Seo from '../structure/seo';

const Contact = () => {
  return (
    <Layout>
      <div>
        COUCOU
      </div>
    </Layout>
  );
};

export default Contact;

export const Head: HeadFC = () => <Seo title="Contact"></Seo>;
