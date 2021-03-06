import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { IzCoreService, IzCoreModule, IzLocaleCode } from '@ization/core';

import { IzWeekdayPipe } from './weekday.pipe';
import { changeDetectorRefMock } from './test-helpers/change-detector-ref.mock';
import { izTemporalDefaultFormats } from '../formats/formats.default';
import { localeDefinitions } from './test-helpers/locale-definitions';
import { IzTemporalPluginLinkService } from '../plugin-link.service';
import { IzTemporalModule } from '../temporal.module';

describe('IzWeekdayPipe', () => {
  let coreService: IzCoreService;
  let linkService: IzTemporalPluginLinkService;
  let pipe: IzWeekdayPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IzCoreModule.withLocales(localeDefinitions),
        IzTemporalModule,
      ],
    });
    coreService = TestBed.inject(IzCoreService);
    linkService = TestBed.inject(IzTemporalPluginLinkService);
    pipe = new IzWeekdayPipe(linkService, izTemporalDefaultFormats, coreService, changeDetectorRefMock);
  });

  function preferLocale(localeCode: IzLocaleCode): void {
    coreService.preferLocaleCode(localeCode);
    flushMicrotasks();
  }

  it('should create an instance', () => {
    expect(pipe).toBeInstanceOf(IzWeekdayPipe);
  });

  it('should correctly format PlainDate', fakeAsync(() => {
    let input = Temporal.PlainDate.from('2012-08-02');

    preferLocale('en-GB');

    expect(pipe.convert(input)).toEqual('Thu');
    expect(pipe.convert(input, 'short')).toEqual('T');
    expect(pipe.convert(input, 'medium')).toEqual('Thu');
    expect(pipe.convert(input, 'long')).toEqual('Thursday');
    expect(pipe.convert(input, {weekday: 'narrow'})).toEqual('T');
    expect(pipe.convert(input, {weekday: 'short'})).toEqual('Thu');
    expect(pipe.convert(input, {weekday: 'long'})).toEqual('Thursday');

    preferLocale('en-US');

    expect(pipe.convert(input)).toEqual('Thu');
    expect(pipe.convert(input, 'short')).toEqual('T');
    expect(pipe.convert(input, 'medium')).toEqual('Thu');
    expect(pipe.convert(input, 'long')).toEqual('Thursday');
    expect(pipe.convert(input, {weekday: 'narrow'})).toEqual('T');
    expect(pipe.convert(input, {weekday: 'short'})).toEqual('Thu');
    expect(pipe.convert(input, {weekday: 'long'})).toEqual('Thursday');

    preferLocale('ja-JP-u-ca-japanese');

    expect(pipe.convert(input)).toEqual('???');
    expect(pipe.convert(input, 'short')).toEqual('???');
    expect(pipe.convert(input, 'medium')).toEqual('???');
    expect(pipe.convert(input, 'long')).toEqual('?????????');
    expect(pipe.convert(input, {weekday: 'narrow'})).toEqual('???');
    expect(pipe.convert(input, {weekday: 'short'})).toEqual('???');
    expect(pipe.convert(input, {weekday: 'long'})).toEqual('?????????');

    preferLocale('cs-CZ');

    expect(pipe.convert(input)).toEqual('??t');
    expect(pipe.convert(input, 'short')).toEqual('??');
    expect(pipe.convert(input, 'medium')).toEqual('??t');
    expect(pipe.convert(input, 'long')).toEqual('??tvrtek');
    expect(pipe.convert(input, {weekday: 'narrow'})).toEqual('??');
    expect(pipe.convert(input, {weekday: 'short'})).toEqual('??t');
    expect(pipe.convert(input, {weekday: 'long'})).toEqual('??tvrtek');
  }));

  it('should correctly format PlainDateTime', fakeAsync(() => {
    let input = Temporal.PlainDateTime.from('2012-08-02T05:04:32');

    preferLocale('en-GB');

    expect(pipe.convert(input)).toEqual('Thu');
    expect(pipe.convert(input, 'short')).toEqual('T');
    expect(pipe.convert(input, 'medium')).toEqual('Thu');
    expect(pipe.convert(input, 'long')).toEqual('Thursday');
    expect(pipe.convert(input, {weekday: 'narrow'})).toEqual('T');
    expect(pipe.convert(input, {weekday: 'short'})).toEqual('Thu');
    expect(pipe.convert(input, {weekday: 'long'})).toEqual('Thursday');

    preferLocale('en-US');

    expect(pipe.convert(input)).toEqual('Thu');
    expect(pipe.convert(input, 'short')).toEqual('T');
    expect(pipe.convert(input, 'medium')).toEqual('Thu');
    expect(pipe.convert(input, 'long')).toEqual('Thursday');
    expect(pipe.convert(input, {weekday: 'narrow'})).toEqual('T');
    expect(pipe.convert(input, {weekday: 'short'})).toEqual('Thu');
    expect(pipe.convert(input, {weekday: 'long'})).toEqual('Thursday');

    preferLocale('ja-JP-u-ca-japanese');

    expect(pipe.convert(input)).toEqual('???');
    expect(pipe.convert(input, 'short')).toEqual('???');
    expect(pipe.convert(input, 'medium')).toEqual('???');
    expect(pipe.convert(input, 'long')).toEqual('?????????');
    expect(pipe.convert(input, {weekday: 'narrow'})).toEqual('???');
    expect(pipe.convert(input, {weekday: 'short'})).toEqual('???');
    expect(pipe.convert(input, {weekday: 'long'})).toEqual('?????????');

    preferLocale('cs-CZ');

    expect(pipe.convert(input)).toEqual('??t');
    expect(pipe.convert(input, 'short')).toEqual('??');
    expect(pipe.convert(input, 'medium')).toEqual('??t');
    expect(pipe.convert(input, 'long')).toEqual('??tvrtek');
    expect(pipe.convert(input, {weekday: 'narrow'})).toEqual('??');
    expect(pipe.convert(input, {weekday: 'short'})).toEqual('??t');
    expect(pipe.convert(input, {weekday: 'long'})).toEqual('??tvrtek');
  }));
});
