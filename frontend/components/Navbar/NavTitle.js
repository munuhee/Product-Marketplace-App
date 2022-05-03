import Link from 'next/link'


const NavTitle = () => {
    return (
        <div className="col-start-1 col-end-2 flex items-center">
            <Link href='/'>
                <a>
                    <img className="h-10 w-auto"viewBox="0 0 149 37" fill="none" src="https://res.cloudinary.com/murste/image/upload/v1649588849/Ecorder_pauoma.svg"/>
                </a>
            </Link>
        </div>
    );
}

export default NavTitle;