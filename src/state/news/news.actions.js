import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../utils/http';
import { apiRoutes } from '../../config';

export const getIds = createAsyncThunk(
    'news/getIds',
    async (params, thunkAPI) => {
      try {
        const response = await http.get(apiRoutes.news.ids);
        const newsIds = response?.data || [];
        const URLs = [...newsIds].map(id => apiRoutes.news.item(id));
        const itemsResponse = await Promise.all(URLs.map(url => http.get(url)));
        const items = itemsResponse.map(item => item?.data);
        return items;
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    },
  );
