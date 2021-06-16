import * as _ from "lodash";

const buildQuery = (path, data) => {
  if (_.isString(data) || _.isNumber(data)) return `${path}/${data}`;

  const params = [];
  if (_.isObject(data)) {
    _.each(_.keys(data), (key) => {
      if (_.has(data, key)) {
        params.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
      }
    });
  }

  const query = _.join(params, "&");

  return `${path}?${query}`;
};

export { buildQuery };
