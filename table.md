/\*_ spell-checker: disable _/

## table

- producers
- global
- voters
- delband
- rammarket
- refunds
- namebids

## params

```json
{
  "json": true,
  "code": "eosio",
  "scope": "eosio",
  "table": "userres",
  "limit": 100,
  "lower_bound": 0,
  "uppper_bound": -1
}
```

### producers

```json
{
  "is_active": 1,
  "last_claim_time": "1529459862000000",
  "location": 0,
  "owner": "123singapore",
  "producer_key": "EOS71UbkZzuz55WNBpsEVQzkXrZAJ2XyLoQiEcS9WKwbYambhFxWb",
  "total_votes": "11657009543757334.00000000000000000",
  "unpaid_blocks": 0,
  "url": "http://eos.vote"
}
```

### global

```json
{
  "base_per_transaction_net_usage": 12,
  "context_free_discount_net_usage_den": 100,
  "context_free_discount_net_usage_num": 20,
  "deferred_trx_expiration_window": 600,
  "last_name_close": "2000-01-01T00:00:00.000",
  "last_pervote_bucket_fill": "1529491544000000",
  "last_producer_schedule_size": 21,
  "last_producer_schedule_update": "2018-06-20T11:11:40.000",
  "max_authority_depth": 6,
  "max_block_cpu_usage": 200000,
  "max_block_net_usage": 1048576,
  "max_inline_action_depth": 4,
  "max_inline_action_size": 4096,
  "max_ram_size": "68719476736",
  "max_transaction_cpu_usage": 150000,
  "max_transaction_delay": 3888000,
  "max_transaction_lifetime": 3600,
  "max_transaction_net_usage": 524288,
  "min_transaction_cpu_usage": 100,
  "net_usage_leeway": 500,
  "perblock_bucket": 35490081,
  "pervote_bucket": 269657295,
  "target_block_cpu_usage_pct": 1000,
  "target_block_net_usage_pct": 1000,
  "thresh_activated_stake_time": "1529492943000000",
  "total_activated_stake": "2424156767873",
  "total_producer_vote_weight": "6174542594341396480.00000000000000000",
  "total_ram_bytes_reserved": "6062616000",
  "total_ram_stake": 967627208,
  "total_unpaid_blocks": 93736
}
```

### voters

```json
{
  "deferred_trx_id": 0,
  "is_proxy": 0,
  "last_unstake_time": "1970-01-01T00:00:00",
  "last_vote_weight": "0.00000000000000000",
  "owner": "111111111114",
  "producers": [],
  "proxied_vote_weight": "0.00000000000000000",
  "proxy": "",
  "staked": 46200,
  "unstaking": "0.0000 EOS"
}
```

### delband

```json
{
  "from": "heztcnbvgmge",
  "to": "heztcnbvgmge",
  "net_weight": "82.5000 EOS",
  "cpu_weight": "82.5000 EOS"
}
```

### rammarket

```json
{
  "supply": "10000000000.0000 RAMCORE",
  "base": {
    "balance": "62656849725 RAM",
    "weight": "0.50000000000000000"
  },
  "quote": {
    "balance": "1096762.9136 EOS",
    "weight": "0.50000000000000000"
  }
}
```

### refunds

```json
{
  "owner": "islishude",
  "request_time": "2018-06-20T02:37:55",
  "net_amount": "4462.0000 EOS",
  "cpu_amount": "4462.0000 EOS"
}
```

### namebids

```json
{
  "high_bid": 25301,
  "high_bidder": "com",
  "last_bid_time": "1529479395500000",
  "newname": "1"
}
```

### userres

```json
{
  "cpu_weight": "82.5000 EOS",
  "net_weight": "82.5000 EOS",
  "owner": "heztcnbvgmge",
  "ram_bytes": 8155
}
```
