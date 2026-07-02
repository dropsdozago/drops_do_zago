import { StoreId } from "@/lib/data";

interface LogoProps {
  className?: string;
}

export function ShopeeLogo({ className = "" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Shopee">
      <path
        fill="#EE4D2D"
        d="M12 2c-1.7 0-3 1.3-3 3v1H5.5c-.8 0-1.4.6-1.5 1.4l-1 13c0 .8.6 1.6 1.5 1.6h15c.9 0 1.6-.7 1.5-1.6l-1-13c-.1-.8-.7-1.4-1.5-1.4H15V5c0-1.7-1.3-3-3-3zm0 1.5c.8 0 1.5.7 1.5 1.5v1h-3V5c0-.8.7-1.5 1.5-1.5zM9.2 11.3c.3-.5 1-.8 1.7-.7.6.1 1 .5 1.2 1 .2-.5.6-.9 1.2-1 .7-.1 1.4.2 1.7.7.3.5.3 1.1 0 1.7l-2.9 4.2-2.9-4.2c-.3-.6-.3-1.2 0-1.7z"
      />
    </svg>
  );
}

export function AliExpressLogo({ className = "" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="AliExpress">
      <rect width="24" height="24" rx="5" fill="#E62E04" />
      <path
        fill="#fff"
        d="M5 16.5h6.5v1.5H5zM9 7.5c.3-1 1.2-1.7 2.3-1.7s2 .7 2.3 1.7h-1.2c-.2-.4-.6-.6-1.1-.6s-.9.2-1.1.6H9zm-2.5 0c.3-1.8 1.9-3.2 3.8-3.2 1.4 0 2.6.7 3.3 1.8.7-1.1 1.9-1.8 3.3-1.8 2 0 3.6 1.4 3.9 3.2h-1.3c-.3-1-1.2-1.7-2.3-1.7-1.2 0-2.2.8-2.4 1.9l-.1.5h-1.2l-.1-.5c-.2-1.1-1.2-1.9-2.4-1.9-1.1 0-2 .7-2.3 1.7H6.5zM5 13h14v1.5H5z"
      />
    </svg>
  );
}

export function SheinLogo({ className = "" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Shein">
      <rect width="24" height="24" rx="5" fill="#000" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="#fff"
        fontSize="8"
        fontWeight="800"
        fontFamily="system-ui, sans-serif"
      >
        SHEIN
      </text>
    </svg>
  );
}

export function MercadoLivreLogo({ className = "" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Mercado Livre">
      <rect width="24" height="24" rx="5" fill="#FFE600" />
      <path
        fill="#2D3277"
        d="M12 6.5c-3 0-5.5 1.8-5.5 4.3 0 1.4.8 2.6 2.1 3.4l-.5 1.5 1.8-1c.7.2 1.4.3 2.1.3 3 0 5.5-1.8 5.5-4.2S15 6.5 12 6.5zm-2 4.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm4 0c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
      />
    </svg>
  );
}

export function StoreLogo({
  id,
  className,
}: {
  id: StoreId;
  className?: string;
}) {
  switch (id) {
    case "shopee":
      return <ShopeeLogo className={className} />;
    case "aliexpress":
      return <AliExpressLogo className={className} />;
    case "shein":
      return <SheinLogo className={className} />;
    case "mercadolivre":
      return <MercadoLivreLogo className={className} />;
  }
}
