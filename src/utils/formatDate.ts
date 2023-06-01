import moment from 'moment';

export const formatDate = (date: number) => moment(date).format('D MMMM YYYY, h:mmA');
