
import ContentLoader from "react-content-loader"

export const Sceleton = () => (
       <ContentLoader
              className="pizza-block"
              speed={2}
              width={280}
              height={465}
              viewBox="0 0 280 465"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb">
              <rect x="0" y="264" rx="10" ry="10" width="280" height="16" />
              <rect x="0" y="297" rx="10" ry="10" width="280" height="88" />
              <rect x="0" y="407" rx="10" ry="10" width="91" height="27" />
              <rect x="129" y="398" rx="26" ry="26" width="152" height="45" />
              <circle cx="138" cy="123" r="123" />
       </ContentLoader>
)

