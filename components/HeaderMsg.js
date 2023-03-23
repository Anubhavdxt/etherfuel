import Link from 'next/link';

export default function HeaderMsg() {
  const MUMBAI_NETWORK_URL = 'https://mumbai.polygonscan.com/address/';
  const CONTRACT_ADDRESS = '0xd89e54b45F8190edEbc79F42376e0687A77Ce30A';
  return (
    <div className="bg-tertiary text-secondary flex items-center justify-center py-5 text-3xl font-medium">
      Have a look on the deployed contract of EtherFuel
      <span className="text-imp ml-3">
        <Link href={MUMBAI_NETWORK_URL + CONTRACT_ADDRESS}>
          <a
            target="_blank"
            rel="noreferer noopener"
          >
            <span className="link hover:text-imp">click here</span>{' '}
            <span>↗</span>
          </a>
        </Link>
      </span>
    </div>
  );
}
