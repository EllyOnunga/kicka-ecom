import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-sm px-6">
      <div className="flex-1">
        <Link to="/" className="text-primary text-2xl font-bold">
          Kicka
        </Link>
        <div className="flex gap-4">
          <Link to="/" className="btn btn-ghost btn-primary">Home</Link>
          <Link to="/shop" className="btn btn-ghost btn-primary">Shop</Link>
          <Link to="/collections" className="btn btn-ghost btn-primary">Collections</Link>
          <Link to="/auth" className="btn btn-outline btn-secondary">Login</Link>
        </div>
      </div>
    </nav>
  );
}