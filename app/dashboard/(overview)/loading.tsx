/**
 * Dynamic Rendering에서의 slow data fetch문제
 * 해결: streaming
 * - 라우팅 자체를 여러 개로 쪼개어, 필요하거나 완료된 부분들부터 점진적으로 유저에게 제공하는 데이터 전송 기법
 * - 유저에게 초기 렌더링 결과물을 제공할 때 서버로의 data fetch가 필요한 부분적인 컨텐츠들을 loading state로써 제공하고, data fetch가 완료되면 그 때 동적인 컨텐츠들을 렌더링
 */

import DashboardSkeleton from "../../ui/skeletons"

export default function Loading () {
  return <DashboardSkeleton />
}