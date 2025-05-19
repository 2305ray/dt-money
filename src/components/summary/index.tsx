import { SummaryCard, SummaryContainer } from "./styles.ts";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { priceFormmatter } from "../../utils/formatter.ts";
import { useSummary } from "../../hooks/useSummary.ts";

export function Summary() {
  const summary = useSummary();
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>

        <strong>{priceFormmatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormmatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormmatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
