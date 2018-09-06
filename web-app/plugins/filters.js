import Vue from 'vue';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

export function host(url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  const parts = host.split('.').slice(-3);
  if (parts[0] === 'www') parts.shift();
  return parts.join('.');
}

export function truncate(text, stop = 150) {
  return text.slice(0, stop) + (stop < text.length ? '...' : '');
}

export function timeAgo(time) {
  const date = new Date(time);
  return distanceInWordsToNow(date);
  // const between = Date.now() / 1000 - Number(time);
  // if (between < 3600) {
  //   return pluralize(~~(between / 60), ' minute');
  // } else if (between < 86400) {
  //   return pluralize(~~(between / 3600), ' hour');
  // } else {
  //   return pluralize(~~(between / 86400), ' day');
  // }
}

export function localDateTime(time) {
  const date = new Date(time);
  const options = {
    hour12: true,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
}

function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }
  return time + label + 's';
}

const filters = {
  host,
  truncate,
  timeAgo,
  localDateTime
};
export default filters;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});