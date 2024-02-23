import { Cog8ToothIcon,ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { Boundary } from './boundary'
export const Header =({})=>{
    return(
    <header>
        {/* <Boundary animateRerendering={false} labels={['recording setting']} size="small"> */}
        <div className='relative rounded-lg border border-dashed p-3 lg:p-5 border-gray-700'>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-4 sm:py-0 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
                <h1 className="font-bold text-gray-600 sm:text-xl">
                AI Recording!
                </h1>

            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <Cog8ToothIcon className="h-6 w-6  text-orange-300" />
                <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-4 py-1 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
                >
                <span className="text-sm font-medium"> View Website </span>
                <ArrowTopRightOnSquareIcon className="h-6 w-6 text-orange-300" />
                </button>
            </div>
            </div>
        </div>
        </div>
    </header>
)
}