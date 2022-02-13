import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav>
        <menu>
          <Link href="/" prefetch={false}>
            <a>Home</a>
          </Link>
          <Link href="/about" prefetch={false}>
            <a>About</a>
          </Link>
        </menu>
      </nav>
    </div>
  );
};

export default Navbar;
