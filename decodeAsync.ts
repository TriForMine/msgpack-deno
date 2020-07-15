import { Decoder } from "./Decoder.ts";
import { defaultDecodeOptions, DecodeOptions } from "./decode.ts";
import { ensureAsyncIterabe, ReadableStreamLike } from "./utils/stream.ts";
import { SplitUndefined } from "./context.ts";

export async function decodeAsync<ContextType>(
  streamLike: ReadableStreamLike<ArrayLike<number>>,
  options: DecodeOptions<SplitUndefined<ContextType>> = defaultDecodeOptions as any,
): Promise<unknown> {
  const stream = ensureAsyncIterabe(streamLike);

  const decoder = new Decoder<ContextType>(
    options.extensionCodec,
    (options as typeof options & { context: any }).context,
    options.maxStrLength,
    options.maxBinLength,
    options.maxArrayLength,
    options.maxMapLength,
    options.maxExtLength,
  );
  return decoder.decodeSingleAsync(stream);
}

export function decodeArrayStream<ContextType>(
  streamLike: ReadableStreamLike<ArrayLike<number>>,
  options: DecodeOptions<SplitUndefined<ContextType>> = defaultDecodeOptions as any,
) {
  const stream = ensureAsyncIterabe(streamLike);

  const decoder = new Decoder<ContextType>(
    options.extensionCodec,
    (options as typeof options & { context: any }).context,
    options.maxStrLength,
    options.maxBinLength,
    options.maxArrayLength,
    options.maxMapLength,
    options.maxExtLength,
  );

  return decoder.decodeArrayStream(stream);
}

export function decodeStream<ContextType>(
  streamLike: ReadableStreamLike<ArrayLike<number>>,
  options: DecodeOptions<SplitUndefined<ContextType>> = defaultDecodeOptions as any,
) {
  const stream = ensureAsyncIterabe(streamLike);

  const decoder = new Decoder<ContextType>(
    options.extensionCodec,
    (options as typeof options & { context: any }).context,
    options.maxStrLength,
    options.maxBinLength,
    options.maxArrayLength,
    options.maxMapLength,
    options.maxExtLength,
  );

  return decoder.decodeStream(stream);
}