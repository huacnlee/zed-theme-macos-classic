import utils from 'utils';

const a = 1;

// This is warning
let b = a + "1";

const here_is_a_error = ;

const here_is_a_error = (here_is_a_info) => {
  let unused_var = 1;
};


/**
 * @deprecated This method was deprecated in v1.0.0 and will be removed in v2.0.0
 */
const warning_method = () => {
  let hint = 1;
}

warning_method();
