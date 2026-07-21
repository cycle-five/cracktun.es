Certainly! Here's a summary of the key points from Chapter 3 of Binomial Models in Finance:

The Binomial Model for Other Contracts

This chapter extends the one-period binomial model to price other financial contracts such as forwards, contingent premium options, exchange rate derivatives, and interest rate derivatives.

Forward Contracts

- The forward price F that prevents arbitrage is given by F = S(0)R, where S(0) is the spot price and R is the risk-free return.
- This is proved both in the binomial model and in a model-independent way using arbitrage arguments.

Contingent Premium Options

- These are options where the premium is paid at expiry and only if the option is in-the-money.
- For a call with contingent premium α, the payoff at expiry is (S(1) - K - α)+ in the up state and 0 in the down state.
- The premium α is determined to be (R/π)C(0), where C(0) is the price of a standard (prepaid) call.

Exchange Rate Derivatives

- The model is extended to include a foreign currency. There are now two interest rates: Rd (domestic) and Rf (foreign).
- The risk-neutral probability π is given by: π = (Rd/Rf - d) / (u - d)
- The one-period pricing formula becomes: X(0) = (πX(1,↑) + (1-π)X(1,↓)) / Rd
- This is applied to price European call and put options on the exchange rate.
- The concept of "Garman-Kohlhagen pips" is introduced as an alternative way to quote option prices.

Interest Rate Derivatives

- The model is set up with P(t,T) denoting the price at time t of a zero-coupon bond paying 1 at time T.
- The risk-neutral probability is given by: π = (P(0,T)R - P(1,T,↓)) / (P(1,T,↑) - P(1,T,↓))
- The one-period pricing formula is: W(0) = (πW(1,↑) + (1-π)W(1,↓)) / R
- This is applied to price bond options and interest rate forwards.
- The chapter concludes with a discussion on modeling stochastic interest rates in a binomial framework.

Key Takeaways

1. The one-period binomial model can be adapted to price a variety of financial contracts.
2. Forward prices and contingent premium option prices are determined to prevent arbitrage.
3. Introducing a foreign currency leads to a modified pricing formula with domestic and foreign interest rates.
4. Interest rate derivatives can be priced using the binomial model with bond prices as the underlying.

The main theme of this chapter is the versatility of the binomial model. By modifying the underlying assets and payoffs, the model can accommodate a wide range of financial contracts. The risk-neutral pricing principle remains the core technique, with the risk-neutral probabilities adjusted to reflect the specifics of each contract.