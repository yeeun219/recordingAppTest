import '../styles/globals.css';
import Footer from '../common/component/Footer';
import { Boundary } from '../common/component/boundary';
import { Header } from '../common/component/Header';
import MyReduxProvider from '../store/ReduxProvider';
export default function RootLayout({ children }) {
 return (
  <html lang="en" className="">
  <body className="overflow-y-scroll pb-36">
    {/* <div className="lg:pl-72"> */}
      {/* <StyledComponentsRegistry> */}
      {/* <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
        <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg space-y-3">
          {/* <Header/> */}
          {/* <Boundary labels={['Entire Header']} size="small">
            <Header/>
          </Boundary> 
          <div className="rounded-lg bg-neutral-100 lg:p-1 text-neutral-700"> */}
          <MyReduxProvider>
            {children}
          </MyReduxProvider>
          {/* </div>
          <Boundary animateRerendering={true} labels={['Entire Footer']} size="small">
            <Footer className="fixed sm:hidden" />
          </Boundary>
        </div>
      </div> */}
    {/* </div> */}
    {/* </StyledComponentsRegistry> */}
  </body>
</html>
  )
}
