import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { isLoggedInVar, logUserOut } from "../apollo";

export const QUERY_me = gql`
  query me {
    me {
      id
      userName
      avatar
    }
  }
`;

function useUser() {
  const hasToken = useReactiveVar(isLoggedInVar);
  /*
  token을 건드려서 로그인화면으로 redirecting되는데
  캐시가 남아있어서 로그인이 안됨 > fetchPolicy
  */
  const { loading, data, error } = useQuery(QUERY_me, {
    skip: !hasToken,
    fetchPolicy: "no-cache",
  });

  if (error) {
    console.log(error, "useUser error");
  }

  //user가 임의로 ls의 token을 바꿨을 경우
  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);

  if (loading) {
    return;
  }

  return data;
}

export default useUser;
