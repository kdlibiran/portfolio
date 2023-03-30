import { buttonVariants } from '@/components/ui/Button'
import {ThemeToggle} from '@/components/ThemeToggle'

interface NavbarProps {}

const Navbar = async ({}) => {
    return (
            <div className=' fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-90 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center w-screen px-3'>
                <div className='flex basis-1/2 items-center md:basis-1/3'>         
                    <button className={buttonVariants({variant: 'link', size: 'lg'})}>
                        Kyle Libiran
                    </button>
                </div>

                <div className= 'hidden md:flex gap-16 justify-center basis-1/3'> 
                    <button className={buttonVariants({variant: 'ghost' })}>
                        About
                    </button>
                    <button  className={buttonVariants({variant: 'ghost' })}>
                        Portfolio
                    </button>
                    <button  className={buttonVariants({variant: 'ghost' })}>
                        Contact
                    </button>
                </div>

                <div className='flex basis-1/2 md:basis-1/3 justify-end mr-10'>
                    <ThemeToggle />
                </div>
            </div>

    )
}

export default Navbar