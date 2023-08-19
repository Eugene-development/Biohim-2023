import Link from "next/link"
export default () => {
  return (
    <footer className="bg-indigo-950">
  <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
      <div className="gap-8 space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:space-y-0">
          <address className="not-italic">
              <p className="mb-6 text-sm font-semibold text-gray-50 uppercase dark:text-white">New York</p>
              <p className="mb-3 text-gray-50 dark:text-gray-400">Huntersville,<br/> 957 Hill Hills Suite 491, United States
              </p>
              <ul className="space-y-3 text-gray-50 dark:text-gray-400">
                  <li className="flex items-center">
                      <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      Office: +12(3) 456 7890 1234
                  </li>
                  <li className="flex items-center">
                      <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      Support: <a href="mailto:company@name.com" className="ml-2 hover:underline">company@name.com</a>
                  </li>
              </ul>
          </address>
          <address className="not-italic">
              <p className="mb-6 text-sm font-semibold text-gray-50 uppercase dark:text-white">Rome</p>
              <p className="mb-3 text-gray-50 dark:text-gray-400">Piazza di Spagna,<br/> 00187 Roma RM, Italy
              </p>
              <ul className="space-y-3 text-gray-50 dark:text-gray-400">
                  <li className="flex items-center">
                      <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      Office: +12(3) 456 7890 1234
                  </li>
                  <li className="flex items-center">
                      <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      Support: <a href="mailto:company@name.com" className="ml-2 hover:underline">company@name.it</a>
                  </li>
              </ul>
          </address>
          <address className="not-italic">
              <p className="mb-6 text-sm font-semibold text-gray-50 uppercase dark:text-white">London</p>
              <p className="mb-3 text-gray-50 dark:text-gray-400">Fulham Rd,<br/>London SW6 1HS, United Kingdom
              </p>
              <ul className="space-y-3 text-gray-50 dark:text-gray-400">
                  <li className="flex items-center">
                      <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      Office: +12(3) 456 7890 1234
                  </li>
                  <li className="flex items-center">
                      <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      Support: <a href="mailto:company@name.com" className="ml-2 hover:underline">company@name.co.uk</a>
                  </li>
              </ul>
          </address>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
      <div className="flex flex-col justify-between items-center lg:flex-row">
          <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-50 lg:mb-0 dark:text-white">
              <img
              className="h-8 mr-3 w-auto"
              src="https://storage.yandexcloud.net/brand-logo/biohim/logo/logo.svg"
              alt="логотип"
            />
              Биохим  
          </Link>
          <span className="block mb-4 text-sm text-gray-50 dark:text-gray-400 lg:mb-0">© 2021-2023 <Link href="/" className="hover:underline">Биохим™</Link>. Все права защищены.
          </span>
      </div>
  </div>
</footer>
  )
}
