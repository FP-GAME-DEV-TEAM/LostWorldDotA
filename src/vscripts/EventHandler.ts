//================================
// 事件处理
//================================

export function OnNpcSpawned(event: NpcSpawnedEvent) {
    // After a hero unit spawns, apply modifier_panic for 8 seconds
    const unit = EntIndexToHScript(event.entindex) as CDOTA_BaseNPC;

    if (unit.IsRealHero()) {

    }
}