// @ts-nocheck 
import "./YoutubeEmbed.scss";

interface YoutubeEmbedParams {
    link: string,
    title: string,
    id: string,
}

const YoutubeEmbed = ({link, title, id}: YoutubeEmbedParams) => {

    return (
        <div className={"youtube-embed"}>
            <iframe 
                height={"315"}
                src={link} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={
                    {
                        border: "0px",
                    }
                }
                title = {title}
                id = {id}
            ></iframe>
            {/* <img src={"https://img.youtube.com/vi/Yom8-wuqTp4/hqdefault.jpg"} alt={"yt-embed"}/> */}
        </div>
    )
}

export default YoutubeEmbed;