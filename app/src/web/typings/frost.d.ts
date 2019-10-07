declare interface FrostJSI {
  loadUrl(url: string | null): boolean

  loadVideo(url: string | null, isGif: boolean): boolean

  reloadBaseUrl(animate: boolean)

  contextMenu(url: string | null, text: string | null)

  longClick(start: boolean)

  disableSwipeRefresh(disable: boolean)

  loadLogin()

  loadImage(imageUrl: string, text: string | null)

  loadImageById(id: string): boolean

  emit(flag: number)

  isReady()

  handleHtml(html: string | null)

  handleHeader(html: string | null)

  allowHorizontalScrolling(enable: boolean)
}

declare var Frost: FrostJSI;
