import { Suspense, LazyExoticComponent, ComponentType } from 'react';
import { SpinnerContainer } from '../SpinnerContainer';

const Loadable =
  (
    Component:
      | LazyExoticComponent<() => JSX.Element>
      | ComponentType<React.ReactNode>,
  ) =>
  (props: any) =>
    (
      <Suspense fallback={<SpinnerContainer />}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
