import { AppStateType, InferActionTypes } from "./store";
import { ThunkAction } from "redux-thunk";
import { PostFilterType, PostType } from "../types/types";
import { blogAPI } from "../api/blogAPI";

const POSTS_CHANGED = 'groxi/blog/POSTS_CHANGED';
const RECENT_CHANGED = 'groxi/blog/RECENT_CHANGED';

const IS_FETCHING_POSTS_SWITCHED = 'groxi/blog/IS_FETCHING_POSTS_SWITCHED';
const IS_FETCHING_RECENT_SWITCHED = 'groxi/blog/IS_FETCHING_RECENT_SWITCHED';

const TOTAL_POSTS_COUNT_CHANGED = 'groxi/blog/TOTAL_POSTS_COUNT_CHANGED';
const CURRENT_PAGE_CHANGED = 'groxi/blog/CURRENT_PAGE_CHANGED';

const FILTER_CHANGED = 'groxi/blog/FILTER_CHANGED';

const FIRST_POST_INDEX_CHANGED = 'groxi/blog/FIRST_POST_INDEX_CHANGED';
const LAST_POST_INDEX_CHANGED = 'groxi/blog/LAST_POST_INDEX_CHANGED';

let initialState = {
    posts: [] as PostType[],
    recentPosts: [] as PostType[],

    isFetchingPosts: false,
    isFetchingRecent: false,

    pageSize: 6, // never changed
    totalPostsCount: 0,
    currentPage: 1,

    filter: {
        query: '',
    } as PostFilterType,


    firstPostIndex: 0, // current index of first product on page
    lastPostIndex: 6, // current index of last product on page
};

const blogReducer = (state = initialState, action: BlogActionTypes): InitialStateType => {
    switch (action.type) {
        case POSTS_CHANGED:
            return _setPosts(state, action.newPosts);
        case RECENT_CHANGED:
            return _setRecent(state, action.newPosts);

        case IS_FETCHING_POSTS_SWITCHED:
            return _switchIsFetchingPosts(state, action.fetchingValue);
        case IS_FETCHING_RECENT_SWITCHED:
            return _switchIsFetchingRecent(state, action.fetchingValue);

        case TOTAL_POSTS_COUNT_CHANGED:
            return _setTotalPostsCount(state, action.count);
        case CURRENT_PAGE_CHANGED:
            return _setCurrentPage(state, action.page);

        case FILTER_CHANGED:
            return _setFilter(state, action.filter);

        case FIRST_POST_INDEX_CHANGED:
            return _setFirstPostIndex(state, action.index);
        case LAST_POST_INDEX_CHANGED:
            return _setLastPostIndex(state, action.index);

        default:
            return state;
    }
}

const _setPosts = (state: InitialStateType, newPosts: PostType[]): InitialStateType => {
    return {
        ...state,
        posts: [...newPosts],
    };
};
const _setRecent = (state: InitialStateType, newPosts: PostType[]): InitialStateType => {
    return {
        ...state,
        recentPosts: [...newPosts],
    };
};


const _switchIsFetchingPosts = (state: InitialStateType, fetchingValue: boolean): InitialStateType => {
    return {
        ...state,
        isFetchingPosts: fetchingValue,
    };
};
const _switchIsFetchingRecent = (state: InitialStateType, fetchingValue: boolean): InitialStateType => {
    return {
        ...state,
        isFetchingRecent: fetchingValue,
    };
};

const _setTotalPostsCount = (state: InitialStateType, count: number): InitialStateType => {
    return {
        ...state,
        totalPostsCount: count,
    };
};
const _setCurrentPage = (state: InitialStateType, page: number): InitialStateType => {
    return {
        ...state,
        currentPage: page,
    };
};

const _setFilter = (state: InitialStateType, newFilter: PostFilterType): InitialStateType => {
    return {
        ...state,
        filter: newFilter,
    };
};

const _setFirstPostIndex = (state: InitialStateType, index: number): InitialStateType => {
    return {
        ...state,
        firstPostIndex: index,
    };
};
const _setLastPostIndex = (state: InitialStateType, index: number): InitialStateType => {
    return {
        ...state,
        lastPostIndex: index,
    };
};

export const blogActions = {
    postsChanged: (newPosts: PostType[]) => ({ type: POSTS_CHANGED, newPosts } as const),
    recentChanged: (newPosts: PostType[]) => ({ type: RECENT_CHANGED, newPosts } as const),

    isFetchingPostsSwitched: (fetchingValue: boolean) => ({ type: IS_FETCHING_POSTS_SWITCHED, fetchingValue } as const),
    isFetchingRecentSwitched: (fetchingValue: boolean) => ({ type: IS_FETCHING_RECENT_SWITCHED, fetchingValue } as const),

    currentPageChanged: (page: number) => ({ type: CURRENT_PAGE_CHANGED, page } as const),
    totalPostsCountChanged: (count: number) => ({ type: TOTAL_POSTS_COUNT_CHANGED, count } as const),

    currentFilterChanged: (filter: PostFilterType) => ({ type: FILTER_CHANGED, filter } as const),

    firstPostIndexChanged: (index: number) => ({ type: FIRST_POST_INDEX_CHANGED, index } as const),
    lastPostIndexChanged: (index: number) => ({ type: LAST_POST_INDEX_CHANGED, index } as const),
}

export const getPostsThunkCreator = (startIndex: number, endIndex: number, filter: PostFilterType): ThunkType =>
    async (dispatch) => {
        dispatch(blogActions.isFetchingPostsSwitched(true));

        const payload = blogAPI.getPosts(startIndex, endIndex, filter);

        dispatch(blogActions.postsChanged(payload.posts));
        dispatch(blogActions.totalPostsCountChanged(payload.totalItems));

        dispatch(blogActions.isFetchingPostsSwitched(false));
    }

export const getRecentThunkCreator = (amount: number): ThunkType =>
    async (dispatch) => {
        dispatch(blogActions.isFetchingRecentSwitched(true));

        const payload = blogAPI.getRecent(amount);
        dispatch(blogActions.recentChanged(payload));

        dispatch(blogActions.isFetchingRecentSwitched(false));
    }

export type InitialStateType = typeof initialState;
type BlogActionTypes = InferActionTypes<typeof blogActions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, BlogActionTypes>;

export default blogReducer;