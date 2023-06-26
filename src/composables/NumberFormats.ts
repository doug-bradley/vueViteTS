
import { ref, type Ref } from 'vue';

export function useNumberFormatter(locale: string) {
  const fractionDigits = ref(0);

  var options = {}

  function formatCurrency(value: number, fractionDigits: number, currencyCode: string = 'USD') {


    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#opt
    options = {
      compactDisplay: "short", // "long" | "short"
      currency: currencyCode,
      currencyDisplay: "symbol", // "code" | "symbol" | "name" | "narrowSymbol"
      currencySign: "standard", // "standard" | "accounting"
      localeMatcher: "best fit", // "lookup" | "best fit"
      notation: "standard", // "standard" | "scientific" | "engineering" | "compact"
      numberingSystem: "latn", // "arab" | "arabext" | "bali" | "beng" | "deva" | "fullwide" | "gujr" | "guru" | "hanidec
      signDisplay: "auto", // "auto" | "always" | "never" | "exceptZero"
      style: "currency", // "decimal" | "percent" | "currency" | "unit"
      // unit: "currency", // "none" | "percent" | "currency" | "unit"
      // unitDisplay: "long", // "long" | "short" | "narrow"
      useGrouping: true, // true | false
      roundingMode: "halfExpand",
      roundingPriority: "auto", // "auto" | "morePrecision" | "lessPrecision" | "currency" | "currencyDigits"
      roundingIncrement: 1, // number
      trailingZeroDisplay: "auto", // "auto" | "always" | "never"
      minimumIntegerDigits: 1, // number
      minimumFractionDigits: fractionDigits, // number
      maximumFractionDigits: fractionDigits,
      minimumSignificantDigits: 1,
      maximumSignificantDigits: 21,
    }
    if (value > 99999) {
      options = {
        ...options,
        notation: "compact"
        , compactDisplay: "short"
        , minimumSignificantDigits: 2
        , maximumSignificantDigits: 3
      }
    }
    const formatter = new Intl.NumberFormat(locale, options);
    const fixedValue = Number(value.toFixed(fractionDigits));

    const result = formatter.format(fixedValue);
    return result;

  }

  function formatNumber(value: number, fractionDigits: number) { 
    const fixedValue = Number(value.toFixed(fractionDigits));
    return fixedValue.toLocaleString(locale, { minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits });
  }

  function formatTime(value: number, fractionDigits: number) {
    var truncate = 10 ** fractionDigits;
    var minutes = value;
    var hours = Math.trunc((minutes / 60) * truncate) / truncate;
    var days = Math.trunc((hours / 24) * truncate) / truncate;
    var weeks = Math.trunc((days / 7) * truncate) / truncate;
    if (minutes == 0) {
      return '0 min'
    }
    if (hours < 1) {
      return `${minutes} min`
    } else {
      if (days < 1) {
        return `${hours} hours`
      } else {
        if (weeks < 1) {
          return `${days} days`
        } else {
          return `${weeks} weeks`
        }
      }
    };
  }

  function formatTimeObject(value: number, fractionDigits: number) {
    var truncate = 10 ** fractionDigits;
    var minutes = value;
    var hours = Math.trunc((minutes / 60) * truncate) / truncate;
    var days = Math.trunc((hours / 24) * truncate) / truncate;
    var weeks = Math.trunc((days / 7) * truncate) / truncate;
    if (minutes == 0) {
      return { time: '0', UOM: 'min' };
    }
    if (hours < 1) {
      return { time: `${minutes}`, UOM: 'min' }
    } else {
      if (days < 1) {
        return { time: `${hours}`, UOM: 'hours' }
      } else {
        if (weeks < 1) {
          return {time: `${days}`, UOM: 'days' }
        } else {
          return { time: `${weeks}`, UOM: 'weeks' }
        }
      }
    };
  }

  function formatAnalytics(value: number, numberType: string, currencyCode: string) {
    switch (numberType) {
      case 'currency':
        return formatCurrency(value, 0, currencyCode);
      case 'average':
        return formatTime(value, 0);
      case 'number':
      default:
        return formatNumber(value, 0);
    }
  }

  function format(value: number) {
    const formatter = new Intl.NumberFormat(locale, options);
    return formatter.format(value);
  }

  function formatDollar(value: Ref<number>) {
    if (!value) return '';

    const f = new Intl.NumberFormat(locale, options);
    return f.format(value?.value ?? 0);
  }

  return {
    format,
    formatCurrency,
    formatNumber,
    formatTime,
    formatTimeObject,
    formatDollar,
    formatAnalytics,
  };
}