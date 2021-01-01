export function setAllArtistChecked(checked, artistMap, setArtistMap) {
    let artistMapTemp = new Map(artistMap)
    document.querySelector('.checkbox-all-artist').checked = checked
    for (const [key, value] of artistMap.entries()) {
        artistMapTemp.set(key, Object.assign(value, {'checked': checked}))
    }
    setArtistMap(artistMapTemp)
}