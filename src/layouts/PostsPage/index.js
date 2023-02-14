import { Card } from "../../ui/Card";
import { Wrap } from "./style";

export const PostsPage = ({ data = [] }) => {
    console.log(data , 'posts');
    return (
        <Wrap>
            {data.map(post => (
                <Card title={post?.title}>
                    {post?.body}
                </Card>
            ))}
        </Wrap>
    );
  };