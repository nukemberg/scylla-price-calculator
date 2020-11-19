<template>
    <div>
        <div class="row">
            <form>
            <div class="row form-group">
                <label class="col-sm-6 col-form-label" for="reads">Read ops/sec</label><input v-model="workload.reads" class="col-sm-3 form-control" type="number" name="reads" id="reads">
            </div>
            <div class="row form-group">
                <label class="col-sm-6 col-form-label" for="writes">Write ops/sec</label><input v-model="workload.writes" class="col-sm-3 form-control" type="number" name="writes" id="writes">
            </div>
            <div class="row form-group">
                <label class="col-sm-6 col-form-label" for="item-size">Average item size (KB)</label><input v-model="workload.itemSize" class="col-sm-3 form-control" type="number" name="items-size" id="item-size">
            </div>
            <div class="row form-group"><label class="col-sm-6 col-form-label" for="storage-size">Storage set size (GB)</label><input class="col-sm-3 form-control" type="number" v-model="workload.storage" name="storage-size" id="storage-size"></div>
            </form>
        </div>
        <hr>
        <div class="row">
            <div class="col-6 m-x-1">
                <dropdown :options="scyllaCalcs" v-model="calc1" description="Scylla offering"></dropdown>
                <component :is="calc1" :workload="workload"></component>
            </div>
            <div class="col-6 m-x-1">
                <dropdown :options="rivalCalcs" v-model="calc2" description="Rival offering"></dropdown>
                <component :is="calc2" :workload="workload"></component>
            </div>
        </div>
        <div class="row">
            <p><small>Prices are monthly, but reserved offerings require a 1 year subscription period.</small></p>
        </div>
    </div>
</template>

<script lang="ts">
import ScyllaCloud from './components/ScyllaCloud.vue'
import DynamoDB from './components/DynamoDB.vue'
import Keyspaces from './components/Keyspaces.vue'
import Dropdown from './components/Dropdown.vue'
import Astra from './components/Astra.vue'

export default {
    data() {
        return {
            scyllaCalcs: {'Scylla cloud': 'ScyllaCloud'},
            rivalCalcs: {'DynamoDB': 'DynamoDB', 'Keyspaces': 'keyspaces', 'Astra': 'Astra'},
            workload: {writes: 10000, reads: 50000, storage: 200, itemSize: 1},
            calc1: 'ScyllaCloud',
            calc2: 'DynamoDB'
        }
    },
    components: {
        ScyllaCloud,
        DynamoDB,
        Keyspaces,
        Astra,
        Dropdown
    }
}
</script>