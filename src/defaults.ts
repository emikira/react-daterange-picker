import { DefinedRange } from "./types";

import {
	addDays,
	startOfWeek,
	endOfWeek,
	addWeeks,
	startOfMonth,
	endOfMonth,
	addMonths
} from "date-fns";

const getDefaultRanges = (date: Date): DefinedRange[] => [
	{
		label: "Hoy",
		startDate: date,
		endDate: date
	},
	{
		label: "Ayer",
		startDate: addDays(date, -1),
		endDate: addDays(date, -1)
	},
	{
		label: "Esta Semana",
		startDate: startOfWeek(date),
		endDate: endOfWeek(date)
	},
	{
		label: "Semana Pasada",
		startDate: startOfWeek(addWeeks(date, -1)),
		endDate: endOfWeek(addWeeks(date, -1))
	},
	{
		label: "Últimos 7 Días",
		startDate: addWeeks(date, -1),
		endDate: date
	},
	{
		label: "Este Mes",
		startDate: startOfMonth(date),
		endDate: endOfMonth(date)
	},
	{
		label: "Mes Pasado",
		startDate: startOfMonth(addMonths(date, -1)),
		endDate: endOfMonth(addMonths(date, -1))
	}
];

export const defaultRanges = getDefaultRanges(new Date());
