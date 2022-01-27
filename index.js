const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
 return cartItemsPrices.reduce((sum, a) => sum + Number(a), 0).toFixed(2) == WINNING_SUM;
}

module.exports = doesCartWinPrize;
