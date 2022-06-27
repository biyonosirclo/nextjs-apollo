import Link from "next/link";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                <div className="container">
                    <a className="navbar-brand" href="#">Apollo</a>
                    
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href={'/'}>
                                <a className="nav-link" aria-current="page">Home</a>
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link href={'/kategori'}>
                                <a className="nav-link" aria-current="page">Kategori Produk</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
