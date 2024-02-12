import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/configDB";
import { NmButton, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8 bg-primary-100">
            <Container>
            <div className="w-full p-2 bg-gradient-to-b from-white to-primary-200 drop-shadow-lg rounded-lg pb-4">
                <div className="w-full flex justify-center mb-4 relative border-none rounded-xl p-4">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl aspect-video w-full max-h-fit drop-shadow-lg"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <NmButton  className="mr-3">
                                    Edit
                                </NmButton>
                            </Link>
                            <NmButton  onClick={deletePost}>
                                Delete
                            </NmButton>
                        </div>
                    )}
                </div>
                
                <div className="w-full mb-6 rounded-l p-4 ">
                    <h1 className="text-4xl text-center drop-shadow-lg font-bold ">{post.title}</h1>
                </div>
                <div className="browser-css text-center bg-gradient-to-b from-white to-primary-200 rounded-lg drop-shadow-lg py-4 px-2 ">
                    {parse(post.content)}
                    </div>
                    </div>
            </Container>
        </div>
    ) : null;
}