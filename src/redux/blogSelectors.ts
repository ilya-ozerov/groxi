import { PostFilterType, PostType } from "../types/types";
import { AppStateType } from "./store";

export const selectPosts = (state: AppStateType): PostType[] => {
    return state.blog.posts;
}
export const selectRecent = (state: AppStateType): PostType[] => {
    return state.blog.recentPosts;
}

export const selectIsFetchingPosts = (state: AppStateType): boolean => {
    return state.blog.isFetchingPosts;
}
export const selectIsFetchingRecent = (state: AppStateType): boolean => {
    return state.blog.isFetchingRecent;
}


export const selectBlogCurrentPage = (state: AppStateType): number => {
    return state.blog.currentPage;
}
export const selectBlogPageSize = (state: AppStateType): number => {
    return state.blog.pageSize;
}
export const selectTotalPostsCount = (state: AppStateType): number => {
    return state.blog.totalPostsCount;
}

export const selectBlogFilter = (state: AppStateType): PostFilterType => {
    return state.blog.filter;
}

export const selectFirstPostIndex = (state: AppStateType): number => {
    return state.blog.firstPostIndex;
}
export const selectLastPostIndex = (state: AppStateType): number => {
    return state.blog.lastPostIndex;
}