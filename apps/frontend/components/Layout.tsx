import { css } from '@emotion/react';
import Footer from 'components/footer/Footer';
import Navigation from 'components/navigation/Navigation';
import { StrapiImage } from 'components/StrapiImage';
import {
  GetAlertQuery,
  GetFooterQuery,
  Maybe,
  UploadFileEntityResponse,
  NavigationItem,
} from 'generated/graphql';
import { GlobalContext } from 'pages/_app';
import { useContext } from 'react';
import type { PartialDeep } from 'type-fest';

export default function Layout({ children }: { children: React.ReactNode }) {
  const context = useContext(GlobalContext);

  return (
    <>
      <div
        css={css`
          z-index: -1;
          width: 100%;
          height: 25%;
          position: absolute;
        `}
      >
        <StrapiImage
          image={context.global.global.data.attributes.background}
          imageProps={{
            layout: 'fill',
            objectFit: 'cover',
            objectPosition: 'center',
            priority: true,
          }}
        />
      </div>
      <Navigation />
      <div className="wrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
