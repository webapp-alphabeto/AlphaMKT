import { BalanceView } from './BalanceView';
export interface BalanceGroupByColor {
    color: string;
    grid: number;
    balance: BalanceView[];
}
