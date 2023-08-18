import React from "react";
import ContentLoader from "react-content-loader";

const CardSkeleton = (props: any) => (
  <ContentLoader
    speed={1}
    width={400}
    height={89}
    viewBox="0 0 400 95"
    backgroundColor="#FFC300"
    foregroundColor="#c7b559"
    {...props}>
    <rect x="0" y="3" rx="0" ry="0" width="90" height="90" />
    <rect x="121" y="40" rx="0" ry="0" width="177" height="20" />
  </ContentLoader>
);

export default CardSkeleton;
