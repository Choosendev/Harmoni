import Link from 'next/link';

const PageLink = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '');

  return (
    <Link
      href={`#${lowerCasePage}`}
      className={`${
        selectedPage === lowerCasePage ? 'text-blue' : ''
      } hover:text-blue-50`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </Link>
  );
};

export default PageLink;
