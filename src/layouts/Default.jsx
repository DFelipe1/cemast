import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { gql, useQuery } from 'urql';
import { useEffect, useMemo } from "react";
import { Loading } from "../components/Loading";

const PageQuery = gql`
    query  {
  page(where: {name: "home"}) {
    home {
      title
      subtitle
      prev
      image {
        url
      }
      cards {
        id
        text
        title
        icon{
          url
        }
      }
    }
    about {
      title
      description
      image {
        url
      }
    }
    courses {
      id
      couses {
        ... on ComponnentCourse {
          id
          slug
          stage
          subtitle
          title
          description {
            text
            html
          }
          image{
            url
          }
          home {
						prev
            title
            
            image {
              url
            }
             cards {
              id
              text
              title
              icon{
                url
              }
          		}
          }
          about {
            title
            description
            image {
              url
            }
          }
        }
      }
    }
    links{
      links
    }
  }
}
    `;

export function Default() {

    const [result, reexecuteQuery] =  useQuery({
        query: PageQuery,
    });

    
    if(result.fetching) {
        return <Loading/>
    }
    
    const links = result.data.page.links[0].links[0]
    return (
        <>
            <Header/>
            <div className="w-full text-textColor">
                <Outlet context={result.data.page} />
            </div>

            <Footer links={links}/>
        </>
    )
}