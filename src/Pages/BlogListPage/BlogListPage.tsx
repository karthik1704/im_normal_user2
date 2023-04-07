import { Helmet } from "react-helmet-async";
import { CommonWhyAimsIbs } from "../../Assets/Assets";
import { BlogListComponent, IBlogListComponent, PageLocation } from "../../Common/Components/Components";
import "./BlogListPage.scss";

const BlogListPage = ({description, baseRoute, defaultFetchUrl, reqId, title}: IBlogListComponent & {title: string, description: string}) => {

    const locations = [
        "HOME", title
    ];

    return (
        <>
            <Helmet>
                <title>{title} - AIMS IBS</title>
                <meta name="description" content={description} />
            </Helmet>
            <PageLocation
                title={title} locations={locations} img={CommonWhyAimsIbs}
            />
            <div className={"blog-list-page"}>
                <BlogListComponent
                    baseRoute={baseRoute}
                    defaultFetchUrl={defaultFetchUrl}
                    reqId={reqId}
                    type={"normal"}
                />
            </div>
        </>
    )
}

export default BlogListPage;