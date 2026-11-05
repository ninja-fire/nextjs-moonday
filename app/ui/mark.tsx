import { useId } from "react";
import studio from "../../public/studio-gradient.webp";

// Sub-paths of the logo mark (public/logo/moonday-logo.svg), 56×24 viewBox.
// The mark is a plate with two holes punched through it: the crescent moon and the full disc.
const pill = "M11.6667 0C5.22334 0 0 5.37258 0 12C0 18.6274 5.22334 24 11.6667 24H44.3333C50.7767 24 56 18.6274 56 12C56 5.37258 50.7767 0 44.3333 0H11.6667Z";
export const disc = "M31.5086 12.3328C31.3939 10.3402 31.8202 8.74703 32.9153 7.43082C33.8701 6.27913 35.1187 5.61417 36.5142 5.23028C38.3972 4.72299 40.3068 4.66815 42.2165 5.04519C44.2397 5.44279 46.0091 6.31341 47.1375 8.20546C47.5849 8.95269 47.852 9.76846 47.9521 10.6322C48.1458 12.2981 48.0857 13.9365 47.3111 15.4789C46.6033 16.8774 45.495 17.8097 44.0994 18.3924C42.1097 19.2219 40.0331 19.3453 37.9231 19.0642C36.6211 18.8928 35.3858 18.5295 34.2774 17.796C32.5814 16.6649 31.6469 14.735 31.5086 12.3328Z";
export const crescent = "M19.3088 16.9004C18.4609 16.7837 17.6569 16.5295 16.9409 16.0213C15.8355 15.2383 15.2351 13.8794 15.1418 12.2368C15.0638 10.8642 15.3456 9.75734 16.0553 8.84385C16.6771 8.04712 17.4874 7.58694 18.3981 7.31908C19.6229 6.96879 20.9293 6.94818 22.1667 7.20231C21.1366 5.99349 19.7673 5.36847 18.2411 5.04566C16.451 4.6679 14.6547 4.72284 12.8834 5.2311C11.5707 5.60886 10.3962 6.28196 9.49799 7.42897C8.46791 8.74769 8.06266 10.345 8.17482 12.327C8.30913 14.7007 9.18394 16.6669 10.7793 17.7933C11.8219 18.5282 12.9839 18.8922 14.2024 19.0639C16.1872 19.3455 18.1343 19.2219 20.006 18.3908C20.8477 18.02 21.5763 17.498 22.1667 16.7974C21.2308 17.0103 20.2824 17.0378 19.3088 16.9004Z";

/** The logo mark, filled with the studio gradient (same image as in the logo SVG). Its holes show whatever is behind. */
export default function Mark({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 56 24" aria-hidden className={className}>
      <defs>
        <pattern id={id} patternContentUnits="objectBoundingBox" width="1" height="1">
          <image href={studio.src} width="1" height="1" preserveAspectRatio="xMidYMid slice" />
        </pattern>
      </defs>
      <path fillRule="evenodd" clipRule="evenodd" d={pill + disc + crescent} fill={`url(#${id})`} />
    </svg>
  );
}
